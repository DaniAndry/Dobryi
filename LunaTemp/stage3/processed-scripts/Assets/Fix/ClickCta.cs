using UnityEngine;

namespace Fix
{
    public class ClickCta : MonoBehaviour
    {
        public void Click()
        {
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}