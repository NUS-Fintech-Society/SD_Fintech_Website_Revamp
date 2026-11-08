'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The Partners contact pair: a mailto pill that shows the address, and a button that copies it. The button reads
 * "Copied" for 2 seconds and a polite status announces it; both labels share one grid cell, so the button keeps its
 * width. If the clipboard is blocked, the visible address is selected instead and the status says how to copy it.
 */
export default function CopyEmail({ email, subject }: { email: string; subject: string }) {
  const address = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setStatus('Email address copied');
      timer.current = setTimeout(() => {
        setCopied(false);
        setStatus('');
      }, 2000);
    } catch {
      const selection = getSelection();
      if (address.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(address.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setStatus('Address selected. Press Ctrl+C to copy it.');
    }
  };

  return (
    <>
      <div className="fs-row-actions">
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className="fs-pill fs-pill--primary">
          {/* One span, so the pill's gap doesn't widen the space before the address. */}
          <span>Email <span ref={address}>{email}</span></span>
        </a>
        <button type="button" className="fs-pill fs-pill--ink fs-copy" onClick={copy}>
          <span aria-hidden={copied}>Copy email</span>
          <span aria-hidden={!copied}>Copied</span>
        </button>
      </div>
      <p className="fs-sr" role="status">{status}</p>
    </>
  );
}
