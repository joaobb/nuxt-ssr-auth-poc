import axios from 'axios'
import { BaseService } from '~/services/Base.service'

export class PostsService extends BaseService {
  async getPosts(payload) {
    try {
      return [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          content:
            'Nullam massa lacus, laoreet non consectetur tempor, fringilla finibus dui. Suspendisse tincidunt neque in varius bibendum. Suspendisse porttitor mauris mauris, a lobortis elit pretium quis. Ut molestie, nibh auctor ultricies consequat, ante quam pharetra odio, vel varius velit tortor sed metus. Praesent scelerisque cursus ex sed lacinia. Curabitur eget quam vitae elit aliquam rutrum. Pellentesque pharetra laoreet nulla nec maximus. Sed ornare felis et ipsum congue viverra. Nam vestibulum facilisis molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ac purus eget erat posuere consequat viverra eu sapien. Fusce elit tortor, molestie vel nibh sit amet, auctor fermentum ligula. Phasellus varius ex in dolor rhoncus, eu efficitur tortor euismod. Morbi vitae pretium ligula, et placerat velit. Aenean molestie orci ut sagittis varius. Fusce dui mi, finibus in tortor quis, malesuada interdum sem. Duis vel venenatis ligula. Nam hendrerit nunc et congue viverra. Vivamus suscipit laoreet commodo. Phasellus luctus sagittis est id vehicula. Aliquam laoreet non lectus sed fringilla. Nunc et justo sed sem ornare bibendum aliquam malesuada diam. Ut dapibus mi vitae ipsum vehicula, vel condimentum lacus finibus. Pellentesque sed mollis nisl, a pulvinar erat. Pellentesque consectetur, tellus ut vehicula tristique, orci lectus imperdiet lectus, sit amet faucibus libero nisi at massa. Sed mauris erat, efficitur et vestibulum non, iaculis eu libero.',
        },
        {
          id: 2,
          title:
            'Nullam sed malesuada tortor. Mauris at tincidunt sem. Aliquam erat volutpat.',
          content:
            'Quisque ullamcorper sollicitudin quam. Ut eget lacus in libero viverra faucibus. In sit amet mi sed ipsum feugiat mattis eleifend id magna. Duis pellentesque vestibulum metus, nec ornare erat hendrerit pellentesque. Etiam at justo nec eros tempus suscipit. Pellentesque vel elementum est, lobortis dignissim odio. Suspendisse potenti. Pellentesque vulputate, purus vitae hendrerit sagittis, nisi orci pulvinar sem, non tristique est mauris ac metus. Donec arcu nulla, auctor et blandit a, euismod non turpis. Vivamus eu porta elit.',
        },
      ]
      // const response = await this.request({ doAuth: true }).post(
      //   '/api/posts',
      //   payload
      // )

      return response.data
    } catch (err) {
      console.log(err.response)
      throw new Error(err.response?.data?.message || err.message)
    }
  }
}
