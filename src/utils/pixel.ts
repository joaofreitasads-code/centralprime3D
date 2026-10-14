declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a standard Meta Pixel event to all initialized pixels
 * (e.g., Pixel 1368569075303614 and Pixel 1079241104970709).
 */
export const trackPixelEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, parameters);
  }
};

/**
 * Fires InitiateCheckout event when the user clicks to proceed to checkout.
 */
export const trackInitiateCheckout = (
  contentName: string,
  value: number,
  currency: string = 'BRL'
) => {
  trackPixelEvent('InitiateCheckout', {
    content_name: contentName,
    value,
    currency,
  });
};
