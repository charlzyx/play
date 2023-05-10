export const sayhello = `
# React template, but with rust dev tools.

- 🦀 Rspack
- React
- TypeScript
- Antd
- ProComponents
- Formily

## Tools

- package manager [bun install](https://bun.sh/docs/cli/install)
- code formatter [https://dprint.dev/](https://dprint.dev/)
ormatter
`;

export const README = () => {
  return (
    <div className='screen'>
      <code>
        <pre>
          {sayhello}
        </pre>
      </code>
    </div>
  );
};
