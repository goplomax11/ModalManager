import React from 'react';
import block from 'bem-cn';
import { days, months, years } from './config';
import './styles.sass';

const form = block('form');

export const View = () => {

    return (
        <>

            <div className='header'>
                <div className='title'>
                    Sign Up
                </div>  
                <div className='subtitle'>
                    {`It’s quick and easy.`}
                </div>
            </div>
                <form className={form()}>
                    <div className='flex'>
                        <div className={form('group').mix('first-name')}>
                                <input className={form('input').mix('name')} placeholder=' ' />
                                <label className={form('label')}>First name</label>

                        </div>

                        <div className={form('group')}>
                                <input className={form('input').mix('name')} placeholder=' ' />
                                <label className={form('label')}>Last name</label>

                        </div>
                    </div>

                    <div className={form('group')}>
                                <input className={form('input')} placeholder=' ' />
                                <label className={form('label')}>Email</label>

                    </div>

                    <div className={form('group')}>
                                <input type='password' className={form('input')} placeholder=' ' />
                                <label className={form('label')}>Password</label>

                    </div>

                    <div className={form('group')}>
                                <input type='password' className={form('input')} placeholder=' ' />
                                <label className={form('label')}>Repeat password</label>

                    </div>

                    <div className={form('group')}>
                        <div className='text'>
                            Birthday
                        </div>
                        <span>
                            <select className='select'>
                                {days.map((day) => <option>{day}</option>)}
                            </select>
                            <select className='select ml'>
                                {months.map((month) => <option>{month}</option>)}
                            </select>
                            <select className='select ml'>
                                {years.map((year) => <option>{year}</option>)}
                            </select>
                        </span>
                    </div>

                    <div className='center'>
                        <button className='button'>
                            Sign Up
                        </button>
                    </div>
                </form>
        </>
    )
}