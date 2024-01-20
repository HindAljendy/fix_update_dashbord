import './Form_Food.css'
import React, { useState } from 'react';
import ImageDropZone from '../ImageDropZone/ImageDropZone';
import x3 from './../../images/x3.svg'
import x1 from './../../images/x1.svg'

const Form_Food = () => {
  const [titleFood, setTitleFood] = useState('');
  const [descriptionFood, setDescriptionFood] = useState('');
  const [selectedFood, setSelectedFood] = useState('');

  const [focused, setFocused] = useState(false);
  const [focusedDescription, setFocusedDescription] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleFocusDescription = () => {
    setFocusedDescription(true);
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
  return (
    <form onSubmit={handleSubmit} className='HJ_form'>
      <div className='HJ_form-part1'>
        <div className='HJ_content HJ_space_top'>
          <ImageDropZone/>
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
          </select>
        </div>

      </div>

      <div className='RH_form_food_description'>
        <label className={focusedDescription ? 'focused' : ''}>Description</label>
        <input type="text" value={descriptionFood} onFocus={handleFocusDescription} onChange={handleDescriptionFood} className='HJ_description' />
      </div>

        <div className='RH_form_lastSection'>
            <div className="RH-space-between">
              <span className='image_size'>Image size :</span>
              <label  className=" size1"> 
                <img src={x1 } alt='size1'/>
               </label>
              <label  className=" size3">
               <img src={x3 } alt='size'/>
              </label>
            </div>
            <div className='HJ_form_buttons'>
              <button className='btn_cancel'>Cancel</button>
              <button type='submit' className='HJ_btn'>Add Food</button>
          </div>
        </div>
  
    </form>



  )
}

export default Form_Food