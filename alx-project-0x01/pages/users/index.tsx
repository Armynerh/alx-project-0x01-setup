import UserCard from "@/components/common/PostCard";
import { UserProps } from "@/interfaces";
const Users: React.FC = () => {
  return <div>Users Page</div>;
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;