/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   selector       Element selector
 *
 */
export default (selector, position) => {
   
    var elements = browser.elements($(selector));
    var text  = "";

    elements.value.forEach(function(el) {
        text  = (browser.elementIdText(el.ELEMENT).value);
        console.log (text + el.position)
      
    //     const text = element.getText();
    // const raceDate = Date.parse(text);
    // const now = new Date();
    // const condition = now > raceDate;

});

   // expect(condition).toBe(true);



    // if (boolFalseCase) {
    //     expect(parsedExpectedText).not.toBe(text);
    // } else {
    //     expect(parsedExpectedText).toBe(text);
    // }
};
