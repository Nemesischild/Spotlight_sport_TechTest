/**
 * 
 * @param  {String}   selector       Element selector
 *
 */
export default (selector) => {
    /**
     * 
     * @type {String}
     */
    const element = $(selector);
    const text = element.getText();

    const raceDate = Date.parse(text);
    const currentDate = new Date();
    const condition = currentDate < raceDate;

    expect(condition).toBe(true);
};
