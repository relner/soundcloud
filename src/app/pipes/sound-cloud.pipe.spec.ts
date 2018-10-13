import { SoundCloudPipe } from './sound-cloud.pipe';

describe('SoundCloudPipe', () => {
  it('create an instance', () => {
    const pipe = new SoundCloudPipe(null);
    expect(pipe).toBeTruthy();
  });
});
