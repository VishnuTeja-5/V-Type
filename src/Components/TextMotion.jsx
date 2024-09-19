import { motion } from "framer-motion";

function TextMotion() {
  const text = "Java Python Ruby Javascript Go Rust".split(" ");

  return (
    <div className="">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TextMotion;
