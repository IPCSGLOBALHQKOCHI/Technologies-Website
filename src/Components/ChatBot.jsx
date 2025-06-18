import { useEffect } from "react";

function ChatBot() {

    useEffect(() => {
        console.log("Injecting Tawk script...");
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/68513acb6134f7190de08198/1itukrasf";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script); 
        };
      }, []);
    }      
    
export default ChatBot
