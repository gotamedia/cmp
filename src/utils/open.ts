const open = {
    notice: () => window?.Didomi?.notice?.show?.(),
    purposes: () => window?.Didomi?.preferences?.show?.(),
    // @ts-expect-error
    vendors: () => window?.Didomi?.preferences?.show?.('vendors'),
}

export default open
