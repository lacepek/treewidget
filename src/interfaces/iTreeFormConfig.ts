import { IFormConfig } from 'react-form';

interface ITreeFormConfig extends IFormConfig {
  onCancel: () => void;
}

export default ITreeFormConfig;
