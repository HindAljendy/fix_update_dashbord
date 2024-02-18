import React, { useEffect, useState } from 'react';
import ImageDropZone from '../ImageDropZone/ImageDropZone';
import axios from 'axios';

const FormEdit_Food = ({ Data }) => {

    const [titleFood, setTitleFood] = useState('');
    const [descriptionFood, setDescriptionFood] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [focused, setFocused] = useState(false);
    const [selectedFoodLN, setSelectedFoodLN] = useState('');
    const [id, setid] = useState(Data.id); //chosing
    const [faile, setChildValue] = useState(null); //chosing
    const token = localStorage.getItem('token');

    const handleChildValueChange = (faile) => {
        setChildValue(faile);
    };

    console.log(Data.id)

    useEffect(() => {
        // تشغيل function عند تحميل الكمبيوننت
        setTitleFood(Data.title);
        setDescriptionFood(Data.description);
        setSelectedFood(0);
        setSelectedFoodLN(0);
        setid(Data.id)
    }, [Data]);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleTitleFood = (e) => {
        setTitleFood(e.target.value);
    }

    const handleDescriptionFood = (e) => {
        setDescriptionFood(e.target.value);
    }

    const handleSelectFood = (e) => {
        setSelectedFood(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSelectFoodLN = (e) => {
        setSelectedFoodLN(e.target.value);
    }

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('title', titleFood);
        formData.append('description', descriptionFood);
        formData.append('images[0]', faile);
        formData.append('language_id', selectedFoodLN);
        formData.append('food_category_id', selectedFood);
        formData.append('_method', 'put');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        };

        await axios.post(`http://127.0.0.1:8000/api/foods/${id}`, formData, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // window.location.href = '/food';
    };

    return (
        <form onSubmit={handleSubmit} className='HJ_form'>
            <div className='HJ_form-part1'>
                <div className='HJ_content HJ_space_top'>
                    <ImageDropZone
                        onChildValueChange={handleChildValueChange}
                    />
                </div>
            </div>
            <div className='HJ_form-part2'>
                <div className='HJ_inputBox'>
                    <input type="text" value={titleFood} required onChange={handleTitleFood} className='HJ_title' />
                    <span>Title</span>
                </div>
                <div className='RH_form_food_select'>
                    <label className={focused ? 'focused' : ''}>Category</label>
                    <select name="categories" onFocus={handleFocus} value={selectedFood} onChange={handleSelectFood} className='HJ_select' required>
                        <option></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>
            </div>

            <div className='FQ-inputFlex'>
                <div className='RH_form_food_description HJ_inputBox width-input-max-FQ'>
                    <input type="text" value={descriptionFood} required onChange={handleDescriptionFood} className='HJ_title' />
                    <span>Descriptio</span>
                </div>
                <div className='HJ_form_select lAN-FGQ'>
                    <select name="EN" className='HJ_select' value={selectedFoodLN} onChange={handleSelectFoodLN} required>
                        <option value="0">Storage Language</option>
                        <option value="1"> عربي</option>
                        <option value="2"> Englesh</option>
                    </select>
                </div>
            </div>

            <div className='RH_form_lastSection'>
                <div className='HJ_form_buttons'>
                    <button className='btn_cancel'>Cancel</button>
                    <button type='submit' className='HJ_btn' onClick={() => handleFileUpload()}>Add Food</button>
                </div>
            </div>

        </form>



    )
}

export default FormEdit_Food