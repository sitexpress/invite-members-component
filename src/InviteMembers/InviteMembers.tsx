import React from 'react';
import classes from "./InviteMembers.module.css"

export const InviteMembers = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.text}>Invite Members</h2>
            <div className={classes.textbox}>
                <input type="text" className={classes.input}/>
                <button className={classes.button}>Enter</button>
            </div>
            <div className={classes.dropdown}>
                <input type="text" className={classes.input}/>
            </div>
            <div className={classes.group}>
                <h2 className={classes.group_text}>Functional Team</h2>
                <div className={classes.rectangle}>
                    <div className={classes.tag}>
                        <div className={classes.tag_item}>sdcsdcscdscdsd</div>
                        <button className={classes.delete_group}>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

