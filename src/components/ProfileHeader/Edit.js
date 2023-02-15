import { CameraAltOutlined } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loader } from "../../loader";
import { LOG_IN } from "../../redux/User/userTypes";

function Edit() {
  const user = useSelector((state) => state.user);
  console.log(user);
  // user data
  const [fullName, setFullName] = useState(user.fullName);
  const [password, setPassword] = useState(user.password);
  //   detail or edit
  const [details, setDetails] = useState(true);
  const dispatch = useDispatch();
  // error
  const [error, setError] = useState("");
  // loading
  const [loading, setLoading] = useState(false);
  //  Set image
  const [image, setImage] = useState(null);
  const [updateImage, setUpdateImage] = useState(null);
  // handle Change
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setUpdateImage(e.target.files[0]);
  };
  // Update User
  const handleUpdate = async () => {
    console.log(updateImage);
    // try {
    //   const saveUser = await JSON.parse(localStorage.getItem("user"));
    //   localStorage.setItem("user", JSON.stringify({ ...saveUser })) &&
    //     dispatch({
    //       type: LOG_IN,
    //       user: JSON.parse(localStorage.getItem("user")),
    //     });
    //   // const saveBack = localStorage.setItem("user", JSON.stringify(saveUser));
    //   console.log(saveUser);
    // } catch (err) {
    //   console.log(err);
    // }

    // const uploadTask = storage.ref(`/items/${item.name}`).put(item);
    // uploadTask.on(
    //   "state_changes",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     uploadTask.snapshot.ref.getDownloadURL().then((url) => {
    //       sendAllphotos.push(url);
    //       if (sendAllphotos.length === 5) {
    //         userRequest.post(`/product/sell/add`, {
    //           userId: user._id,
    //           category: newProduct.category,
    //           title: newProduct.title,
    //           description: newProduct.description,
    //           modal: newProduct.modal,
    //           location: newProduct.location,
    //           condition: newProduct.condition,
    //           price: newProduct.price,
    //           photos: sendAllphotos,
    //         });
    //         navigate("/");
    //         setLoading(false);
    //       }
    //     });
    //   }
    // );
  };

  return (
    <>
      <label htmlFor="profileImg" className="profileImg">
        <input type="file" id="profileImg" onChange={handleChange} />
        {!image ? <img src={user.profileImage} /> : <img src={image} />}
        <CameraAltOutlined />
      </label>

      <div className="inputs">
        <div className="inputs__box">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Example"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoFocus
          />
        </div>
        {/* Description */}
        <div className="inputs__box">
          <p>Add Description</p>
          <textarea placeholder="Add some description about yourself..."></textarea>
        </div>
        <div className="inputs__box">
          <p>Current Password</p>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputs__box">
          <p>New Password</p>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Form Footer */}
        <div className="form__footer">
          <button onClick={handleUpdate}>
            {loading ? (
              <img src={loader} width={15} height={15} />
            ) : (
              "Update Now"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
