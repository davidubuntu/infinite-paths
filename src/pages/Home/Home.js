import CodeBlock from 'components/CodeBlock/CodeBlock'
import style  from './Home.scss'
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
    <div className={style.home}>
      <CodeBlock height={10}>
        {code1}
      </CodeBlock>
      <CodeBlock height={18}>
        {code2}
      </CodeBlock>
    </div>
  )
}
