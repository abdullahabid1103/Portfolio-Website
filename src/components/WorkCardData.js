import ecom from "../assets/ecom.png"
import todo from "../assets/Todo.png"
import weather from "../assets/weather.png"
import grocery from "../assets/grocery.png"

const ProjectCardData = [
    {
        imgsrc: ecom,
        title: "E-commerce Website",
        text: "A basic e-commerce website that fetches product images, names, and prices from a dummy API and displays them in a responsive layout.",
        view: ecom,
        code: "https://github.com/abdullahabid1103/Ecommerce-App"              
    },

    {
        imgsrc: todo,
        title: "To-Do App",
        text: "A simple to-do application that lets users add, view, and manage tasks with a clean and minimal interface.",
        view: todo,
        code: "https://github.com/abdullahabid1103/To-Do-App"             
    },

    {
        imgsrc: weather,
        title: "Weather Application",
        text: "A weather application that fetches and displays the current temperature and conditions of any searched city using a weather API.",
        view: weather,
        code: "https://github.com/abdullahabid1103/Weather-App"                
    },

    {
        imgsrc: grocery,
        title: "Grocery List App",
        text: "A simple and efficient tool to manage your shopping needs. You can quickly add new grocery items, search through your list to find specific products, and remove items once they’re no longer needed..",
        view: grocery,
        code: "https://github.com/abdullahabid1103/Grocery-list-app"                
    }
]

export default ProjectCardData
