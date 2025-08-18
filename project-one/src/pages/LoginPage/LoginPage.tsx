import { Button, Text, TextField } from "@/components/common";
import { ERoute } from "@/configs/router";
import useLocalStorage from "@/hooks/useLocalStorage";
import useToast from "@/hooks/useToast";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "./LoginPage.scss";

const LoginPage = () => {
  const { setAccessInfo, getAcessInfo } = useLocalStorage();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const accessInfo = getAcessInfo();

  const handleLogin = () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;

    if (id !== "kdao") {
      showToast("User is not available", "error");
      return;
    }

    showToast("Logged in successfully", "success");
    setAccessInfo({ name: "Khanh Dao", email: `khdao@gmail.com-${password}` });
    navigate(`/${ERoute.LISTING}`);
  };

  // WATCHER: Object Access Info to detect whether user already logged in or NOT
  useEffect(() => {
    if (accessInfo) {
      navigate(`/${ERoute.LISTING}`);
    }
  }, []);

  return (
    <div className="login-page">
      <Text variant="h5"> Login</Text>
      <div className="login-page__fields">
        <TextField placeholder="Username *" ref={idRef} />
        <TextField placeholder="Password *" ref={passwordRef} type="password" />
      </div>
      <Button width={180} height={40} onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
