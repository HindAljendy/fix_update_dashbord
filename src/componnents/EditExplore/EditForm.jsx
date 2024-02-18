import './../FormExplore/FormExplore.css'
import React, { useEffect, useState } from 'react';
import gallery_add from './../../images/gallery-add.svg'
import { Link } from 'react-router-dom';
import ImageDropZone from '../ImageDropZone/ImageDropZone';
import axios from 'axios';

const EditForm = ({ Data }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedLN, setselectedLN] = useState(0);
    const [selectedcategory, setselectedcategory] = useState('');
    const [selectedsummary, setselectedsummary] = useState('');
    const [faile, setChildValue] = useState(null); //chosing
    const [id, setid] = useState(Data.id); //chosing

    const token = localStorage.getItem('token');

    useEffect(() => {
        // تشغيل function عند تحميل الكمبيوننت
        setTitle(Data.title);
        setDescription(Data.description);
        setSelectedOption(0);
        setselectedLN(0);
        setselectedcategory(0);
        setselectedsummary(Data.summary);
        setChildValue(Data.image);
        setid(Data.id)
    }, [Data]);

    const handleChildValueChange = (faile) => {
        setChildValue(faile);
    };

    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSelectChangeLN = (e) => {
        setselectedLN(e.target.value);
    }

    const handleDateChange = (e) => {
        setselectedsummary(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setselectedcategory(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', selectedsummary);
        formData.append('description', description);
        formData.append('language_id', selectedLN);
        formData.append('tags[0]', selectedOption);
        formData.append('images[0]', faile);
        formData.append('videos[0]', faile);
        formData.append('category_id', selectedcategory);
        formData.append('_method', 'put');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        };

        await axios.post(`http://127.0.0.1:8000/api/posts/${id}`, formData, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // window.location.reload()
    };

    return (
        <form onSubmit={handleSubmit} className='HJ_form'>
            <div className='HJ_form-part1'>
                <label className='HJ_label'>Article Cover</label>
                <div className='HJ_content'>
                    <ImageDropZone
                        onChildValueChange={handleChildValueChange}
                    />
                </div>
            </div>
            <div className='HJ_form-part2'>
                <div className='HJ_inputBox'>
                    <input type="text" value={title} required onChange={handleTitleChange} className='HJ_title' />
                    <span>Title</span>
                </div>

                <div className='HJ_inputBox'>
                    <input type='text' value={selectedsummary} required onChange={handleDateChange} className='HJ_title' />
                    <span>Sammary</span>
                </div>
            </div>

            <div className='HJ_form_select'>
                <div>
                    <label className={focused ? 'focused' : ''}>Tags</label>
                    <select name="tags" onFocus={handleFocus} value={selectedOption} onChange={handleSelectChange} className='HJ_select' required>
                        <option></option>
                        <option value="1"> #Mountain_Breeze</option>
                        <option value="2"> #Syrai</option>
                        <option value="3"> #Tourism</option>
                        <option value="4"> placeat</option>
                        <option value="5"> praesentium</option>
                    </select>
                </div>
                <div>
                    <select name="EN" value={selectedcategory} onChange={handleCategoryChange} className='HJ_select' required>
                        <option>Category</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                        <option value="6"> 6</option>
                        <option value="7"> 7</option>
                        <option value="8"> 8</option>
                    </select>
                </div>
                <div>
                    <select name="EN" value={selectedLN} onChange={handleSelectChangeLN} className='HJ_select' required>
                        <option value="0">Storage Language</option>
                        <option value="1"> عربي</option>
                        <option value="2"> Englesh</option>
                    </select>
                </div>
            </div>

            <div className='HJ_form_description'>
                <label>Description</label>
                <input type="text" value={description} onChange={handleDescriptionChange} className='HJ_description' />
            </div>

            <div className='HJ_form_link'>
                <img src={gallery_add} alt="gallery add" />
                <Link to='/gallery'>Add Photo/video</Link>

            </div>
            <div className='HJ_form_buttons'>
                <button className='btn_cancel'><Link to='/'>Cancel</Link></button>
                <button type='submit' className='HJ_btn' onClick={handleFileUpload}>update Article</button>
            </div>

        </form>
    );
}

export default EditForm

