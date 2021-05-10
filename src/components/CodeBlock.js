import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({children}) => {
  return (
    <SyntaxHighlighter language="javascript" style={coldarkDark}>
      {children}
    </SyntaxHighlighter>
  );
};
export default CodeBlock
