# devto-to-markdown CLI

The `devto-to-markdown` CLI utility allows you to convert Dev.to blogs into Markdown format. This tool is useful if you want to export yours dev.to blogs to markdown and present them in your own blog or system

## Installation

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system.
2. Open your terminal or command prompt.
3. Execute the following command to install the utility globally: ```npm i -g devto-to-markdown```

## Usage

Once the utility is installed, you can convert Dev.to blogs to Markdown using the following command:

```devto-to-markdown -u <devto-url>```

Replace `<devto-url>` with the URL of the Dev.to blog you want to convert.

For example:

```devto-to-markdown -u https://dev.to/oryaacov/how-to-setup-http-server-with-security-headers-using-nginx-docker-dok```

## Additional Flags

The `devto-to-markdown` utility provides an additional flag to convert the generated Markdown to be compatible with [React Markdown](https://github.com/remarkjs/react-markdown). This can be useful if you plan to use the Markdown in a React project.

To enable the React Markdown conversion, use the `--react-markdown` flag:

```devto-to-markdown -u <devto-url> --react-markdown```

The resulting Markdown file will be modified to conform to the React Markdown syntax.

That's it! You can now use the `devto-to-markdown` utility to convert your favorite Dev.to blogs into Markdown and leverage them in other contexts.
