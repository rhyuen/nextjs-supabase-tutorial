import { supabase } from "../utils/supabase";
import {useState, useEffect} from "react";
import Video from "react-player";

const TodoDetails = ({todos}) => {

    const [videoUrl, setVideoUrl] = useState();
    const getPremiumContent = async () => {
        const {data} = await supabase
            .from('premium_content')
            .select('video_url')
            .eq('id', todos.id)
            .single();
        
        // ? mark operator only attempts to access 'video_url' data field if 'data' parent object is not null.

        if(data && data.video_url){
            setVideoUrl(data.video_url);
        }else{
            setVideoUrl(data);
        }
        
    };

    useEffect(() => {
        getPremiumContent();
    }, []);


    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            
            <h1 className="text-3xl mb-6">{todos.name}</h1>
            <p>{todos.created_at}</p>
            <p>{todos.details}</p>
            {
                !!videoUrl &&
                <Video url={videoUrl} width="100%">
                    {videoUrl}
                </Video>
            }
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