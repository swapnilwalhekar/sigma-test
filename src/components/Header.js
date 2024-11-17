import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleCancel = () => {
    setPopupVisible(false);
  };

  const handleConfirm = () => {
    localStorage.clear();
    setPopupVisible(false);
    navigate("/");
    alert("Logout Successfully");
  };

  return (
    <header className="header">
      <div className="profile">
        <img
          src="https://www.southcharlottefamilycounseling.com/wp-content/uploads/2015/10/cropped-logo-dummy.png"
          alt="Logo"
        />
      </div>
      <div className="profile" onClick={togglePopup}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAANlBMVEWVu9////+QuN6Ktdzt8/n5+/3a5vOcv+H1+PzF2e2hwuKmxeSFstu0zujS4fHj7Pa80+qtyuaLcV/OAAAEgUlEQVR4nO2cYZOjIAyGISCoCML//7Mn7V5r92wlUSJz0+fbzs5O3w0kgSRFiC9fvlQAHlyt5BVQahLOx2EheicmpRpRCDD60MsX+uDHBiyoIM6/lP3omyOoS6WBGDaV3ekGcaH11CdpN/MNVxkPxvmztMw8XmI88PvSMv4CdSqWaZMysi8tDKXapByYbQfFdrvZjlUdOIw2KR2nOtA4cZpRHAScNikDnzrXYcV1jkubMlhtUhqueGLx2qS0PNoUesdlAo/pLNJV72gW05Xm1N+w5Fh8HLnDEk1g5wz3jp4l1NG0SckgjbrlWDYddcuxbDpVcDbfZq4f6RQpymV0fXHY09JKXP1ltcRIssSS+jmiaXEjXdz4FdesuKb3nKCLq6+t6TjXdIZoOrc2fSrBlXDWcJRzkDWcJyyXfqo4Dm1NX3CA6K4zizhEwXUNS/G16Ru/cKRN1/NU6GibjmXLNV4Cg5EijqugPlHETTza2q4Ji4QXl7i0EQqvPEXXG3h/ZfLVG+hif/1b4ROsS/C5QwbbNeTUJgTKdIZXG67hytpuFbhdx7vjbhQfnBjKEL8pP3NeMrtRGIk54++TspIOZ3t/zVigTnPmhjWw7xT9dXNgsGc7fc2Y1Y+6z5ed+Zrpw8dM5qcr9uMazTmCCDCaR7ENhNmcMunMY7tBMFwTnKBcTl3PmULlfs+T5olS9/x9Nq5x9Qdglw/wuntdtMWSwpv+Yb+uN148LfWz8J32oqbrLlvHh+camtVSgVI2xTgMMSa7nhIGeJ4QuuBFJfuBSuY1csz25ZO2BqzBvrqzNul8eQAubOz7+HmhQGwUkLvgzvWOxQe2B790mt5+EExpO0Z3xp0XW8B+OIDoZLcMAWDfSLsR7EnGA/c5SemQ4HUjLT+msPNH5xzdIe2m9yV4xNXpY4yrwPKOPp2grrzg1et5QRcf3884FJB7XXvMxw1HbnXtc7QZBqQRyFIOlp7oDcwSjjU5AT90i6E7FE9q7rjMoV1HH4Uo49DABKH4i+NAqbiuO2QOuISq6g6ZjiyOPp5ZDrnKQ+2sYiB3YYHQqcFiqOJKCjVHIRd6yEMaGIiFdg5/IHtE7dx1h5jB6PNeGIizYaSeLx5il5hHHEkaVM/6d0i3MI78kCHlCEonnwKp+UQdqMJCmoahfYMKD6n9TxtZwkMZcuJyVpK78mTWDCG7ckUSUizhSfsZQurniiSkWEIfkMdC6MjWvxb+hXA9VFzapMSLAz5xhPzFJw6vjeXqdQedv/iyFyF/8WUvQv6ifycDD/pbHG2La3lZaW8w0MAfhXnu+xnCnR8SU3IlNSN2Z4HOgTpR9M/EwfnKTKJXrMH6imfO2W924BH6lIo17KdNPOWROlCjH07Vpwc/njdekmdZfCjvkL+n18FXeHpwWeAxDkeWWJshjvVeHFz+Y2vTMHfIGNh185CsFfUH1QDUtCgMRYMQvTZh0TUpziHEvG3s6G4a3yzivKhyoxWsul5FKqWmCaxL95cs81uWyVmYJtXMe5brN0AbeMPyy5f/kT9lvjoA+a0+/wAAAABJRU5ErkJggg=="
          alt="Profile"
        />
        {isPopupVisible && (
          <div className="profile-popup">
            <h2>Log Out</h2>
            <p>Are you sure you want to log out?</p>
            <div className="popup-buttons">
              <button onClick={handleCancel} className="cancel-button">
                Cancel
              </button>
              <button onClick={handleConfirm} className="confirm-button">
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
