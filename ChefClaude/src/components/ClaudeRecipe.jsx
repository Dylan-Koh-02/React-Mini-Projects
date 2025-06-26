import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Claude Chef Recommedation:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
