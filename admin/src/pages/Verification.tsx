import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  verificationStart,
  verificationSuccess,
  verificationFailure,
} from "@/redux/authSlice"; // Ensure to import these actions
import { postData } from "../../global/server";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation to access the navigation state
import { Input } from "@/components/ui/input";

export default function Verification() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract phone number from the navigation state
  const { phoneNumber } = location.state || {};

  // Handle OTP verification
  const handleVerify = async () => {
    if (!phoneNumber) {
      alert("Phone number is missing. Please navigate from the login page.");
      return;
    }

    if (otp.length === 6) {
      console.log(otp);
      try {
        dispatch(verificationStart()); // Dispatch verification start action
        const response = await postData(
          "/api/auth/admin-login",
          { phone: phoneNumber, password: otp },
          null,
          null
        );
        console.log(response);

        if (response?.success) {
          console.log(response);
          // Store token and user ID in localStorage
          localStorage.setItem("userId", response.user._id);
          localStorage.setItem("authToken", response.token);

          dispatch(verificationSuccess(response));

          // Navigate to the product page on success
          navigate("/product");
        } else {
          dispatch(verificationFailure(response?.message)); // Dispatch verification failure action
          alert("OTP verification failed. Please try again.");
        }
      } catch (error) {
        dispatch(
          verificationFailure((error as any)?.message || "Unknown error")
        ); // Dispatch verification failure action
        console.error(
          "OTP verification error:",
          (error as any).response
            ? (error as any).response.data
            : (error as any).message
        );
      }
    } else {
      alert("Please enter the complete OTP.");
    }
  };

  return (
    <div className="mx-auto max-w-[450px] min-h-screen space-y-6 flex flex-col justify-center">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Get Started as an Admin</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your Password to continue
        </p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Password</Label>
            <Input
              type="password"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter your password"
              autoComplete="true"
            />
          </div>

          <Button className="w-full" type="submit" onClick={handleVerify}>
            Verify
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
