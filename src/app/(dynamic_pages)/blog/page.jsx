import Link from "next/link";
import styles from "./Blog.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "SIDSHOP-Product",
  description: "Discover Your devices with our shop",
};

export default async function Blog() {
  const data = await getData();

  const products = data.products;

  console.log(products);

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => (
        <Link
          href={`/blog/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={product.thumbnail}
              width={325}
              height={250}
              alt="post image"
            />

            <div className={styles.conten}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.text}>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// export default Blog;
