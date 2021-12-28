import { supabase } from "../utils/supabase";

const TodoDetails = ({todos}) => {
    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            
            <h1 className="text-3xl mb-6">{todos.name}</h1>
            <p>{todos.created_at}</p>
            <p>{todos.details}</p>
        </div>
    )
}

export const getStaticPaths = async() => {
    const {data: todos} = await supabase.from("todo").select("id");

    const paths = todos.map(({id})=> ({
        params: {
            id: id.toString()
        }
    }));
    

    return {
        paths, fallback: false
    };
}

export const getStaticProps = async({params: {id}}) => {
    const {data: todos} = await supabase.from("todo").select("*").eq("id", id).single();

    return {
        props: {
            todos
        }
    }
}

export default TodoDetails;