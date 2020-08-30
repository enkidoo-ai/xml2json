import { xml2json } from '../xml2json-light';
import * as fixtures from './fixtures/xml.fixtures';
describe('Xml to Json parser', () => {
  it('should parse lower case xml', () => {
    const obj = xml2json(fixtures.planes);

    expect(obj).toEqual({
      empty: '',
      planes: {
        owner: 'John',
        plane: [
          { year: '1977', make: 'Cessna', model: 'Skyhawk', color: 'Light blue and white' },
          { year: '1975', make: 'Piper', model: 'Apache', color: 'White' },
          { year: '1960', make: 'Cessna', model: 'Centurian', color: 'Yellow and white' },
          { year: '1956', make: 'Piper', model: 'Tripacer', color: 'Blue' },
        ],
      },
    });
  });

  it('should parse complex xml', () => {
    const obj = xml2json(fixtures.complex);

    expect(obj).toEqual({
      catalog: {
        product: {
          description: 'Cardigan Sweater',
          product_image: 'cardigan.jpg',
          catalog_item: [
            {
              gender: 'Men',
              item_number: 'QWZ5671',
              price: '39.95',
              sale: { eligible: 'no' },
              size: [
                {
                  description: 'Medium',
                  color_swatch: [
                    { image: 'red_cardigan.jpg', '_@ttribute': 'Red' },
                    { image: 'burgundy_cardigan.jpg', '_@ttribute': 'Burgundy' },
                  ],
                },
                {
                  description: 'Large',
                  color_swatch: [
                    { image: 'red_cardigan.jpg', '_@ttribute': 'Red' },
                    { image: 'burgundy_cardigan.jpg', '_@ttribute': 'Burgundy' },
                  ],
                },
              ],
            },
            {
              gender: 'Women',
              item_number: 'RRX9856',
              price: '42.50',
              sale: { eligible: 'yes' },
              size: [
                {
                  description: 'Small',
                  color_swatch: [
                    { image: 'red_cardigan.jpg', '_@ttribute': 'Red' },
                    { image: 'navy_cardigan.jpg', '_@ttribute': 'Navy' },
                    { image: 'burgundy_cardigan.jpg', '_@ttribute': 'Burgundy' },
                  ],
                },
                {
                  description: 'Medium',
                  color_swatch: [
                    { image: 'red_cardigan.jpg', '_@ttribute': 'Red' },
                    { image: 'navy_cardigan.jpg', '_@ttribute': 'Navy' },
                    { image: 'burgundy_cardigan.jpg', '_@ttribute': 'Burgundy' },
                    { image: 'black_cardigan.jpg', '_@ttribute': 'Black' },
                  ],
                },
                {
                  description: 'Large',
                  color_swatch: [
                    { image: 'navy_cardigan.jpg', '_@ttribute': 'Navy' },
                    { image: 'black_cardigan.jpg', '_@ttribute': 'Black' },
                  ],
                },
                {
                  description: 'Extra Large',
                  color_swatch: [
                    { image: 'burgundy_cardigan.jpg', '_@ttribute': 'Burgundy' },
                    { image: 'black_cardigan.jpg', '_@ttribute': 'Black' },
                  ],
                },
              ],
            },
          ],
        },
      },
    });
  });
});
