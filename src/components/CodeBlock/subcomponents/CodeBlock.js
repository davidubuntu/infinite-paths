import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({children, height}) => {
  return (
    <SyntaxHighlighter
      customStyle={{ height: `${height}rem`,  fontSize: '1rem',width:'100%',borderRadius:'0.7rem' }}
      language="javascript" style={materialDark}>
      {children}
    </SyntaxHighlighter>
  );
};
export default CodeBlock
