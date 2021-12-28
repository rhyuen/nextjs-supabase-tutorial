import { supabase } from "../utils/supabase.js";
import Link from "next/link";


export default function Home({todos}) {
    console.log(todos)
    console.log(supabase.auth.user());
    return (
      <div className="w-full max-w-3xl mx-auto my-16 px-2">
        <h1>Hello world!</h1>
        {
            todos.map(({id, name, details}) => {
                return (
                    <Link key={id} href={`/${id}`}>
                        <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">{name}</a>
                    </Link>
                )
            })
        }
        <footer>
            I don't know.
        </footer>
      </div>
    )
  }


  export const  getStaticProps = async () =>{

    
      const {data: todos} = await supabase.from("todo").select("*");

      console.log(todos);

      return {
          props: {
              todos
          }
      }
  }