let expect = require('chai').expect;
let rgbToHexColor = require('../06. RGB to Hex');

describe('Testing rgbToHexColor()', () => {

    it('Input 0, 0, 0 should be #000000', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Input 255, 255, 255 should be #FFFFFF', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Input 255, 0, 0 should be red', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('Input 0, 255, 0 should be green', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('Input 0, 0, 255 should be blue', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('Input -1, 0, 0 should be undefined', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('Input 0, -1, 0 should be undefined', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('Input 0, 0, -1 should be undefined', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('Input 256, 0, 0 should be undefined', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('Input 0, 256, 0 should be undefined', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('Input 0, 0, 256 should be undefined', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('Input of incorrect type NaN, undefined, number should return undefined', () => {
        expect(rgbToHexColor(NaN, undefined, 'number')).to.be.undefined;
    });
});