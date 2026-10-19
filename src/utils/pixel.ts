declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a standard tracking event if tracker is available.
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
