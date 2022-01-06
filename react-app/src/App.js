import logo from './logo.svg';
import {Button} from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Button number ="AC"/>
      <Button number ="+-"/>
      <Button number ="%"/>
      <Button number ="/"/>
      </div>
      <div>
      <Button number ="7"/>
      <Button number ="8"/>
      <Button number ="9"/>
      <Button number ="X"/>
      </div>
      <div>
      <Button number ="4"/>
      <Button number ="5"/>
      <Button number ="6"/>
      <Button number ="-"/>
      </div>
      <div>
      <Button number ="1"/>
      <Button number ="2"/>
      <Button number ="3"/>
      <Button number ="+"/>
      </div>
      <div>
      <Button number ="0"/>
      <Button number ="."/>
      <Button number ="="/>
      </div>
      
     
    </div>
  );
}

export default App;
