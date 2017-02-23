/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name AirWatchSDK
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { AirWatchSDK } from 'ionic-native';
 *
 * AirWatchSDK.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AirWatchSDK',
  plugin: 'airwatch-sdk-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.airwatch', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'none'
})
export class AirWatchSDK {

  /**
   * This function returns an event-handler function to receive events from the SDK
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  static setSDKEventListener(): Promise<any> { return; }

  /**
   * This function returns the enrolled user's username
   * @return {Promise<string>} Returns a promise
   */
  @Cordova()
  static username(): Promise<string> { return; }

  /**
   * This function returns the enrolled user's group ID
   * @return {Promise<string>} Returns a promise
   */
  @Cordova()
  static groupId(): Promise<string> { return; }

  /**
   * This function returns the name of the server to which the device is enrolled
   * @return {Promise<string>} Returns a promise
   */
  @Cordova()
  static serverName(): Promise<string> { return; }

  /**
   * This function returns the "allow copy/paste" setting for the profile
   * @return {Promise<boolean>} Returns a promise
   */
  @Cordova()
  static allowCopyPaste(): Promise<boolean> { return; }

  /**
   * This function returns the "allow offline use" setting for the profile
   * @return {Promise<boolean>} Returns a promise
   */
  @Cordova()
  static allowOffline(): Promise<boolean> { return; }

  /**
   * This function returns any custom settings provided in the app's profile
   * @return {Promise<string>} Returns a promise
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static customSettings(success, error): Promise<string> { return; }

}
