import awsIot from 'aws-iot-device-sdk';
import path from 'path';

const lights = awsIot.thingShadow({
  keyPath: path.join(__dirname, '/keys/lights/d6b934217c-private.pem.key'),
  certPath: path.join(__dirname, '/keys/lights/d6b934217c-certificate.pem.crt'),
  caPath: path.join(__dirname, '/keys/root-CA.crt'),
  clientId: 'lights',
  region: 'eu-central-1'
});

lights.on('connect', () => {
  lights.register('lights');
});

const changeState = data => {
  let payload = {
    state: {
      desired: data
    }
  };
  lights.update('lights', payload)
};

export default changeState;