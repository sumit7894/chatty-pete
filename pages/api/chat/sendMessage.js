export const config ={
    runtime:"edge",
};

export default async function handler(req){
    try {
        const {message} = req.json();
    } catch (error) {
        console.log("AN ERROR OCCURED IN SENDMESSAGE",e);
    }
}