import FormEdit from "../FormEdit/FormEdit"
import Topbar from "../Topbar/Topbar"


const EditArticle = () => {
  return (
    <div className="HJ_edit-article  HJ_container ">
        <Topbar title="Blogs / New Article"/>
        <FormEdit/>

    </div>
  )
}

export default EditArticle