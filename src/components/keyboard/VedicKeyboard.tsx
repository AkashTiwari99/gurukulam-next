'use client';

import * as React from 'react';
import { Copy, Check, Trash2, Delete, CornerDownLeft, Space } from 'lucide-react';

const CONSONANTS = [
  { roman: 'ka', dev: 'क' }, { roman: 'kha', dev: 'ख' }, { roman: 'ga', dev: 'ग' }, { roman: 'gha', dev: 'घ' }, { roman: 'ṅa', dev: 'ङ' },
  { roman: 'ca', dev: 'च' }, { roman: 'cha', dev: 'छ' }, { roman: 'ja', dev: 'ज' }, { roman: 'jha', dev: 'झ' }, { roman: 'ña', dev: 'ञ' },
  { roman: 'ṭa', dev: 'ट' }, { roman: 'ṭha', dev: 'ठ' }, { roman: 'ḍa', dev: 'ड' }, { roman: 'ḍha', dev: 'ढ' }, { roman: 'ṇa', dev: 'ण' },
  { roman: 'ta', dev: 'त' }, { roman: 'tha', dev: 'थ' }, { roman: 'da', dev: 'द' }, { roman: 'dha', dev: 'ध' }, { roman: 'na', dev: 'न' },
  { roman: 'pa', dev: 'प' }, { roman: 'pha', dev: 'फ' }, { roman: 'ba', dev: 'ब' }, { roman: 'bha', dev: 'भ' }, { roman: 'ma', dev: 'म' },
  { roman: 'ya', dev: 'य' }, { roman: 'ra', dev: 'र' }, { roman: 'la', dev: 'ल' }, { roman: 'ḷa', dev: 'ळ' }, { roman: 'va', dev: 'व' },
  { roman: 'śa', dev: 'श' }, { roman: 'ṣa', dev: 'ष' }, { roman: 'sa', dev: 'स' }, { roman: 'ha', dev: 'ह' },
  { roman: 'kṣa', dev: 'क्ष' }, { roman: 'jña', dev: 'ज्ञ' }, { roman: 'tra', dev: 'त्र' }, { roman: 'dya', dev: 'द्या' }, { roman: 'śra', dev: 'श्र' }
];

const VOWELS = [
  { roman: 'a', dev: 'अ', matra: '' },
  { roman: 'ā', dev: 'आ', matra: 'ा' },
  { roman: 'i', dev: 'इ', matra: 'ि' },
  { roman: 'ī', dev: 'ई', matra: 'ी' },
  { roman: 'u', dev: 'उ', matra: 'ु' },
  { roman: 'ū', dev: 'ऊ', matra: 'ू' },
  { roman: 'ṛ', dev: 'ऋ', matra: 'ृ' },
  { roman: 'ṝ', dev: 'ॠ', matra: 'ॄ' },
  { roman: 'ḷ', dev: 'ऌ', matra: 'ॢ' },
  { roman: 'ḹ', dev: 'ॡ', matra: 'ॣ' },
  { roman: 'e', dev: 'ए', matra: 'े' },
  { roman: 'ai', dev: 'ऐ', matra: 'ै' },
  { roman: 'o', dev: 'ओ', matra: 'ो' },
  { roman: 'au', dev: 'औ', matra: 'ौ' },
  { roman: 'visarga', dev: 'ः', matra: 'ः' },
  { roman: 'virama', dev: '्', matra: '्' },
  { roman: 'anusvara', dev: 'ं', matra: 'ं' },
  { roman: 'candrabindu', dev: 'ँ', matra: 'ँ' },
  { roman: 'avagraha', dev: 'ऽ', matra: 'ऽ' },
];

const VEDIC_MARKS = [
  { roman: 'udatta', char: '\u0951' },
  { roman: 'anudatta', char: '\u0952' },
  { roman: 'grave', char: '\u0953' },
  { roman: 'acute', char: '\u0954' },
  { roman: 'nihshvasa', char: '\u1CD3' },
  { roman: 'mid-svarita', char: '\u1CD4' },
  { roman: 'aggr-svarita', char: '\u1CD5' },
  { roman: 'indep-svarita', char: '\u1CD6' },
  { roman: 'candra-below', char: '\u1CD8' },
  { roman: 'double-svarita', char: '\u1CDA' },
  { roman: 'triple-svarita', char: '\u1CDB' },
  { roman: 'kathaka-anudatta', char: '\u1CDC' },
  { roman: 'dot-below', char: '\u1CDD' },
  { roman: 'two-dots', char: '\u1CDE' },
  { roman: 'three-dots', char: '\u1CDF' },
  { roman: 'ardhavisarga', char: '\u1CF2' },
  { roman: 'candra-above', char: '\u1CF4' }
];

const SAMA_SVARA = [
  { roman: 'karshana', char: '\u1CD0' },
  { roman: 'shara', char: '\u1CD1' },
  { roman: 'prenkha', char: '\u1CD2' },
  { roman: 'comb-a', char: '\uA8EA' },
  { roman: 'comb-u', char: '\uA8EB' },
  { roman: 'comb-ka', char: '\uA8EC' },
  { roman: 'comb-na', char: '\uA8ED' },
  { roman: 'comb-pa', char: '\uA8EE' },
  { roman: 'comb-ra', char: '\uA8EF' },
  { roman: 'comb-vi', char: '\uA8F0' },
  { roman: 'comb-avagraha', char: '\uA8F1' },
  { roman: 'ind-chandrabindu', char: '\uA8F3' },
  { roman: 'ind-anusvara', char: '\uA8F4' },
  { roman: 'sup-0', char: '\uA8E0' },
  { roman: 'sup-1', char: '\uA8E1' },
  { roman: 'sup-2', char: '\uA8E2' },
  { roman: 'sup-3', char: '\uA8E3' },
  { roman: 'sup-4', char: '\uA8E4' },
  { roman: 'sup-5', char: '\uA8E5' },
  { roman: 'sup-6', char: '\uA8E6' },
  { roman: 'sup-7', char: '\uA8E7' },
  { roman: 'sup-8', char: '\uA8E8' },
  { roman: 'sup-9', char: '\uA8E9' }
];

const SPECIALS = [
  { roman: 'danda', char: '।' },
  { roman: 'double danda', char: '॥' },
  { roman: 'om', char: 'ॐ' },
  { roman: 'nukta', char: '़' },
  { roman: 'abbreviation', char: '॰' }
];

const NUMBERS = [
  { roman: '0', dev: '०' }, { roman: '1', dev: '१' }, { roman: '2', dev: '२' }, { roman: '3', dev: '३' }, { roman: '4', dev: '४' },
  { roman: '5', dev: '५' }, { roman: '6', dev: '६' }, { roman: '7', dev: '७' }, { roman: '8', dev: '८' }, { roman: '9', dev: '९' }
];

export function VedicKeyboard() {
  const [text, setText] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'vowels' | 'consonants' | 'vedic' | 'sama' | 'specials' | 'numbers'>('vowels');
  const [matraMode, setMatraMode] = React.useState(false);
  const [selectedFont, setSelectedFont] = React.useState<'siddhanta' | 'adishila'>('siddhanta');
  const [copied, setCopied] = React.useState(false);
  const [deviceKeyboardEnabled, setDeviceKeyboardEnabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const insertChar = (char: string) => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const nextText = text.substring(0, start) + char + text.substring(end);
    setText(nextText);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + char.length, start + char.length);
    }, 10);
  };

  const handleBackspace = () => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    if (start === end && start > 0) {
      const nextText = text.substring(0, start - 1) + text.substring(end);
      setText(nextText);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start - 1, start - 1);
      }, 10);
    } else if (start !== end) {
      const nextText = text.substring(0, start) + text.substring(end);
      setText(nextText);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start, start);
      }, 10);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Typing & Preview Area */}
      <div className="bg-surface border border-border-subtle rounded-3xl p-5 sm:p-6 shadow-subtle space-y-4">
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-border-subtle gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">
              Vedic Typing Canvas
            </span>
            <div className="flex items-center rounded-full border border-border-subtle bg-subtle/60 p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedFont('siddhanta')}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors ${
                  selectedFont === 'siddhanta'
                    ? 'bg-accent text-on-accent shadow-xs'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
                title="Use Siddhanta Font"
              >
                Siddhanta
              </button>
              <button
                type="button"
                onClick={() => setSelectedFont('adishila')}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors ${
                  selectedFont === 'adishila'
                    ? 'bg-accent text-on-accent shadow-xs'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
                title="Use Adishila SanVedic Font"
              >
                Adishila SanVedic
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setText('')}
              className="p-2 rounded-xl text-textMuted hover:text-status-danger hover:bg-subtle transition-colors text-xs flex items-center space-x-1 min-h-[36px]"
              title="Clear text"
              aria-label="Clear all typed text"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Clear</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-full bg-accent text-on-accent text-xs font-semibold hover:bg-accent-hover transition-colors flex items-center space-x-1.5 shadow-subtle min-h-[36px]"
              aria-label="Copy typed text"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
          </div>
        </div>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          inputMode={deviceKeyboardEnabled ? 'text' : 'none'}
          placeholder="यहाँ वैदिक संस्कृत टाइप करें (Type Vedic Sanskrit here)..."
          className={`w-full h-32 sm:h-36 bg-transparent text-textPrimary placeholder-textMuted ${
            selectedFont === 'siddhanta' ? 'font-siddhanta' : 'font-adishila'
          } text-xl sm:text-2xl leading-relaxed resize-y focus:outline-none`}
        />

        {/* Canvas Footer: Quick Punctuation & Tablet Safety Toggle */}
        <div className="pt-3 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Quick Frequent Marks */}
          <div className="flex items-center space-x-1">
            <span className="text-[11px] text-textMuted hidden sm:inline mr-1">Quick:</span>
            {['।', '॥', 'ॐ', '्', 'ऽ'].map((sym) => (
              <button
                key={sym}
                type="button"
                onClick={() => insertChar(sym)}
                className="px-2 py-0.5 rounded-lg border border-border-subtle bg-subtle/70 hover:bg-accent-soft hover:text-accent font-devanagari font-bold text-xs transition-colors min-h-[30px]"
              >
                {sym}
              </button>
            ))}
          </div>

          {/* Stats & Tablet Crash Prevention */}
          <div className="flex items-center space-x-3 text-textMuted">
            <span className="text-[11px] font-mono">
              {text.trim() ? text.trim().split(/\s+/).length : 0} शब्द • {text.length} वर्ण
            </span>

            <button
              type="button"
              onClick={() => setDeviceKeyboardEnabled(!deviceKeyboardEnabled)}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border transition-colors flex items-center space-x-1 ${
                deviceKeyboardEnabled
                  ? 'border-status-info bg-status-info/10 text-status-info'
                  : 'border-status-success bg-status-success/10 text-status-success'
              }`}
              title="टैबलेट / फोन पर ऑन-स्क्रीन कीबोर्ड क्रैश रोकने के लिए टॉगल करें"
            >
              <span>{deviceKeyboardEnabled ? '📱 OS Keypad: Active' : '🛡️ Tablet Mode (Crash-Proof)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Virtual Keyboard Shell */}
      <div className="bg-surface border border-border-strong rounded-3xl p-3 sm:p-6 shadow-elevated space-y-3 sm:space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pb-3 border-b border-border-subtle">
          <button
            onClick={() => setActiveTab('vowels')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'vowels'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            स्वर / मात्रा
          </button>
          <button
            onClick={() => setActiveTab('consonants')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'consonants'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            व्यञ्जन
          </button>
          <button
            onClick={() => setActiveTab('vedic')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'vedic'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            वैदिक स्वर
          </button>
          <button
            onClick={() => setActiveTab('sama')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'sama'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            सामवेद
          </button>
          <button
            onClick={() => setActiveTab('specials')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'specials'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            विशेष चिह्न
          </button>
          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[36px] ${
              activeTab === 'numbers'
                ? 'bg-accent text-on-accent'
                : 'bg-subtle text-textSecondary hover:text-textPrimary'
            }`}
          >
            अङ्क
          </button>

          {activeTab === 'vowels' && (
            <button
              onClick={() => setMatraMode(!matraMode)}
              className={`ml-auto px-3 py-1 rounded-full text-xs font-medium border transition-colors min-h-[34px] ${
                matraMode
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-border-subtle text-textMuted hover:text-textPrimary'
              }`}
            >
              {matraMode ? 'Mode: मात्रा' : 'Mode: मूल स्वर'}
            </button>
          )}
        </div>

        {/* Keys Grid */}
        <div className="min-h-[180px]">
          {activeTab === 'vowels' && (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5 sm:gap-2">
              {VOWELS.map((v, i) => {
                const charToInsert = matraMode && v.matra !== null ? v.matra : v.dev;
                return (
                  <button
                    key={i}
                    onClick={() => insertChar(charToInsert)}
                    className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                  >
                    <span className="font-vedic text-lg sm:text-xl font-bold text-textPrimary group-hover:text-accent">
                      {charToInsert || '—'}
                    </span>
                    <span className="text-[9px] text-textMuted">{v.roman}</span>
                  </button>
                );
              })}
            </div>
          )}

          {activeTab === 'consonants' && (
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-1.5 sm:gap-2">
              {CONSONANTS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => insertChar(c.dev)}
                  className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                >
                  <span className="font-vedic text-lg sm:text-xl font-bold text-textPrimary group-hover:text-accent">
                    {c.dev}
                  </span>
                  <span className="text-[9px] text-textMuted">{c.roman}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'vedic' && (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5 sm:gap-2">
              {VEDIC_MARKS.map((m, i) => (
                <button
                  key={i}
                  onClick={() => insertChar(m.char)}
                  className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                >
                  <span className="font-vedic text-xl sm:text-2xl font-bold text-accent">
                    {`◌${m.char}`}
                  </span>
                  <span className="text-[9px] text-textMuted truncate max-w-[55px]">
                    {m.roman}
                  </span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'sama' && (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5 sm:gap-2">
              {SAMA_SVARA.map((s, i) => (
                <button
                  key={i}
                  onClick={() => insertChar(s.char)}
                  className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                >
                  <span className="font-vedic text-xl sm:text-2xl font-bold text-accent">
                    {`◌${s.char}`}
                  </span>
                  <span className="text-[9px] text-textMuted truncate max-w-[55px]">
                    {s.roman}
                  </span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'specials' && (
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
              {SPECIALS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => insertChar(s.char)}
                  className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                >
                  <span className="font-vedic text-xl sm:text-2xl font-bold text-textPrimary group-hover:text-accent">
                    {s.char}
                  </span>
                  <span className="text-[9px] text-textMuted">{s.roman}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'numbers' && (
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
              {NUMBERS.map((n, i) => (
                <button
                  key={i}
                  onClick={() => insertChar(n.dev)}
                  className="h-12 sm:h-14 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent active:scale-95 flex flex-col items-center justify-center transition-all group min-h-[44px]"
                >
                  <span className="font-vedic text-xl sm:text-2xl font-bold text-textPrimary group-hover:text-accent">
                    {n.dev}
                  </span>
                  <span className="text-[9px] text-textMuted">{n.roman}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Controls: Space, Backspace, Enter */}
        <div className="pt-3 border-t border-border-subtle grid grid-cols-3 gap-2">
          <button
            onClick={() => insertChar(' ')}
            className="h-12 rounded-2xl border border-border-subtle bg-subtle hover:bg-surface text-textSecondary hover:text-textPrimary text-xs font-semibold flex items-center justify-center space-x-1 transition-colors min-h-[44px] active:scale-95"
            aria-label="Insert Space"
          >
            <Space className="w-4 h-4" />
            <span>Space</span>
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 rounded-2xl border border-border-subtle bg-subtle hover:bg-surface text-textSecondary hover:text-textPrimary text-xs font-semibold flex items-center justify-center space-x-1 transition-colors min-h-[44px] active:scale-95"
            aria-label="Backspace"
          >
            <Delete className="w-4 h-4" />
            <span>Backspace</span>
          </button>
          <button
            onClick={() => insertChar('\n')}
            className="h-12 rounded-2xl border border-border-subtle bg-subtle hover:bg-surface text-textSecondary hover:text-textPrimary text-xs font-semibold flex items-center justify-center space-x-1 transition-colors min-h-[44px] active:scale-95"
            aria-label="New Line"
          >
            <CornerDownLeft className="w-4 h-4" />
            <span>Enter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
