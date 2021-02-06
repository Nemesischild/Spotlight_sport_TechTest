/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default (selector) => {
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const isEnabled = $(selector).isEnabled();

          expect(isEnabled).toEqual(
            true,
            `Expected element "${selector}" to be enabled`
        );
    
};
