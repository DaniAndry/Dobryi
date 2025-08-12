using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Button))]
public class SoundSwitcher : MonoBehaviour
{
   [SerializeField] private Image _onImage;
   [SerializeField] private Image _offImage;

   private bool _isSound = true;
   private Button _toggleSoundButton;

   private void Awake()
   {
      _toggleSoundButton = GetComponent<Button>();
   }

   private void OnEnable()
   {
      _toggleSoundButton.onClick.AddListener(ToggleSound);
   }

   private void OnDisable()
   {
      _toggleSoundButton.onClick.RemoveListener(ToggleSound);
   }
   
   private void ToggleSound()
   {
      _isSound = !_isSound;

      if (_isSound)
      {
         AudioListener.volume = 1f;
         _onImage.gameObject.SetActive(true);
         _offImage.gameObject.SetActive(false);
      }
      else
      {
         AudioListener.volume = 0f;
         _onImage.gameObject.SetActive(false);
         _offImage.gameObject.SetActive(true);
      }
   }
}

