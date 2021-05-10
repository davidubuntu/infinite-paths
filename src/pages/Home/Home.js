import CodeBlock from 'components/CodeBlock'

export const Home = () => {
  const code1 = `{
  "compilerOptions": {
    "baseUrl": "src"
  },
   "include": ["src"]
  }
  `
  const code2 = `
  "eslintConfig": {
  "extends": ["react-app", "airbnb"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
  `
  return (
    <div>
      <CodeBlock>
        {code1}
      </CodeBlock>
      <CodeBlock>
        {code2}
      </CodeBlock>
    </div>
  )
}
