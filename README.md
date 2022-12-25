# Timex - Time Complexity Estimator

A Chrome extension that estimates the time complexity of a selected function using the OpenAI API. The OpenAI API is capable of analyzing functions written in a variety of formats, including pseudocode, math notation, and programming languages.

**Please note that the OpenAI API is currently in beta, so some functionality may not work as expected.**

## Installation

1. Clone or download this repository.
2. In Chrome, go to `chrome://extensions/` and enable Developer mode.
3. Click on `Load unpacked` and select the repository folder.
4. Create a `config.json` file in the root directory and add your OpenAI API key like this:

```bash
{
  "OPENAI_API_KEY": "YOUR_API_KEY_HERE"
}

```

To obtain an API key, you will need to create a free account at https://beta.openai.com/.

## Usage

1. Select a function in any web page.
2. Click on the Timex extension icon in the Chrome toolbar.
3. The extension will estimate the time complexity of the selected function and display the result in a pop-up window.

## Examples

![Example 1](https://github.com/fonCki/TimeComplexityCalculator/blob/0ccb1a57d590091fbbaff50c2ba86e1287533063/utils/photo_1.png)

![Example 2](https://github.com/fonCki/TimeComplexityCalculator/blob/0ccb1a57d590091fbbaff50c2ba86e1287533063/utils/photo_2.png)

## Testing

To test the extension, you can use the `test.html` file in the `utils` directory. Simply open this file in Chrome and follow the same steps as above to estimate the time complexity of the provided function.

## Dependencies

- [OpenAI API](https://beta.openai.com/) (beta)

## Contributing

If you want to contribute to this project, please send me an email with a description of your proposed changes.


## License

This project is not yet licensed. Future releases will be licensed under a suitable open source license.

## Authors

- [Alfonso Ridao](https://alfonso.ridao.ar)
- For support, email alfonso@ridao.ar.


## 🚀 About Me
I'm a time traveler

