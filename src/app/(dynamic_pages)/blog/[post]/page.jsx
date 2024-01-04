import Image from "next/image";
import styles from "./Post.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  // read route params
  const id = params.post;

  // fetch data
  const product = await getData(params.post);

  return {
    title: product.title,
    description: product.description,
  };
}

const Post = async ({ params }) => {
  const product = await getData(params.post);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={100}
              height={100}
            />
          ))}
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          architecto fugiat incidunt optio nisi eum perspiciatis animi neque
          sequi iure? Nulla deserunt maiores et molestias laudantium asperiores
          reiciendis consequatur impedit qui saepe error, incidunt commodi
          beatae, consequuntur quis assumenda, magni officiis voluptate quas
          omnis eum iste mollitia accusantium. Dolore, reprehenderit?
        </p>
      </div>
    </div>
  );
};

export default Post;
