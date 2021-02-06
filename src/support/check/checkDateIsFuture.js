/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   selector       Element selector
 *
 */
export default (selector) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    const element = $(selector);
    const text = element.getText();

    const raceDate = Date.parse(text);
    const currentDate = new Date();
    const condition = currentDate < raceDate;

    expect(condition).toBe(true);
};
