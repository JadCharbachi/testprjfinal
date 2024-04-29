import { Card, Text, Title } from "@tremor/react";
import ApiFinhubCards from "./TheAPI/apifinhubcards";
import 'bootstrap/dist/css/bootstrap.min.css';


export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto my-auto " style={{}}>
      <div>
        <h1 className="my-4 p-4 align-text-bottom" style={{ textAlign: "center", verticalAlign: "middle", fontSize: 100 }}>
          SIMINANCE
        </h1>
      </div>
      <div className="p-4" style={{ textAlign: "center", columnGap: 10 }}>
        <a className="btn btn-primary mx-4" href="login" role="button">Se connecter</a>
        <a className="btn btn-primary mx-4" href="signup" role="button">S&apos;inscrire</a>
      </div>
      {/*<Text>
          Recherches récentes
        </Text>
        <ApiFinhubCards symbol={''} />*/}
    </main>
  );
}
