using UnityEngine;

namespace Source
{
    public class ClickCta : MonoBehaviour
    {
        public void Click()
        {
            Luna.Unity.Playable.InstallFullGame();
            Luna.Unity.LifeCycle.GameEnded();
        }
    }
}