import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({children, height}) => {
  return (
    <SyntaxHighlighter
      customStyle={{ height: `${height}rem`,  fontSize: '0.9rem',width:'25rem',borderRadius:'0.7rem' }}
      language="javascript" style={materialDark}>
      {children}
    </SyntaxHighlighter>
  );
};
export default CodeBlock
