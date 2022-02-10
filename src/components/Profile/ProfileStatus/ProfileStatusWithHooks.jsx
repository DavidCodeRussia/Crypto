import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onClick={activateMode}>Status: {props.status || "empty status"}</span>
                </div>
            }
            {editMode &&
            <div>
                Status: <input onChange={onStatusChange} value={status} onBlur={deactivateMode} autoFocus={true}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;