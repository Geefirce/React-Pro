export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📍</em>
      </p>
    );

  /** chat gpt about the translating logic to code
   * how to turn and idea a=into code interpretation
   * check for an article on this
   *  */
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go ✈ "
          : ` 💼 You have ${numItems} items on yoru list, and you already packed 
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
