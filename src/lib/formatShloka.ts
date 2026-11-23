/**
 * src/lib/formatShloka.ts
 *
 * Strict Metrical Break Rule & Typography Utilities for Sanskrit Shlokas.
 * Guarantees that verses break strictly at punctuation break points:
 *   - Ardha 1 (Line 1): terminating strictly at single danda '।'
 *   - Ardha 2 (Line 2): terminating strictly at double danda '॥' with verse number
 * Stray/arbitrary newlines inside a hemistich are merged cleanly.
 */

/**
 * Splits raw Sanskrit verse text strictly at metrical break points (dandas).
 */
export function formatShlokaLines(rawText: string): string[] {
  if (!rawText) return [];

  // Normalize newlines
  let text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  // Repair orphaned verse numbers separated from double danda: e.g. "॥\n 13 ॥" -> "॥ 13 ॥"
  text = text.replace(/॥\s*\n\s*([0-9०-९\.]+)\s*॥?/g, '॥ $1 ॥');
  text = text.replace(/॥\s*\n\s*([0-9०-९\.]+)/g, '॥ $1 ॥');

  // Split lines
  const rawLines = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  if (rawLines.length === 0) return [];

  // If long prose commentary/preface (e.g. Mangala #17 with >400 chars and few dandas), preserve sentences
  const dandaCount = (text.match(/[।॥]/g) || []).length;
  if (text.length > 400 && dandaCount < 6) {
    return rawLines;
  }

  const mergedLines: string[] = [];
  let currentAcc = '';

  for (const l of rawLines) {
    // If line starts with solitary verse number or danda continuation
    if (/^([0-9०-९\.]+\s*॥|॥)/.test(l) && currentAcc) {
      currentAcc += ' ' + l;
      mergedLines.push(currentAcc.trim());
      currentAcc = '';
      continue;
    }

    if (currentAcc) {
      currentAcc += ' ' + l;
    } else {
      currentAcc = l;
    }

    // Check if current line ends with a full-stop break point:
    // 1. Single danda: " ।"
    // 2. Double danda with optional verse number: " ॥ 1 ॥", " ॥1.1.1॥", " ॥"
    const isBreakPoint =
      /।$/.test(currentAcc.trim()) ||
      /॥(\s*[0-9०-९\.]+\s*॥?)?$/.test(currentAcc.trim());

    if (isBreakPoint) {
      mergedLines.push(currentAcc.trim());
      currentAcc = '';
    }
  }

  if (currentAcc) {
    mergedLines.push(currentAcc.trim());
  }

  // Clean and normalize spaces in each hemistich
  return mergedLines.map((line) => {
    let cleaned = line.replace(/\s+/g, ' ').trim();
    // Ensure standard space before danda
    cleaned = cleaned.replace(/([^\s।॥])\s*।/g, '$1 ।');
    cleaned = cleaned.replace(/([^\s।॥])\s*॥/g, '$1 ॥');
    return cleaned;
  });
}

/**
 * Returns canonical normalized verse string with lines joined by \n.
 */
export function normalizeShloka(rawText: string): string {
  return formatShlokaLines(rawText).join('\n');
}

/**
 * Determines appropriate CSS meter class based on maximum line character count:
 * - >70 chars: Long meters (Sārdūlavikrīḍita, Sragdharā, etc.)
 * - 48-70 chars: Medium meters (Vasantatilakā, Triṣṭubh, etc.)
 * - <=48 chars: Standard Anushṭubh meter
 */
export function getShlokaMeterClass(lines: string[]): string {
  const maxLen = Math.max(...lines.map((l) => l.length), 0);
  if (maxLen > 70) {
    return 'shloka-meter-long';
  }
  if (maxLen > 48) {
    return 'shloka-meter-medium';
  }
  return 'shloka-meter-standard';
}
