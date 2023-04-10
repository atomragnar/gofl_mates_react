import {
    Form,
    useNavigate,
    useNavigation,
    useActionData,
    json,
    redirect
} from 'react-router-dom';
import {getAuthToken} from "../../util/Auth";
import {SelectComponent} from "../NonFilteredSelect";
import {FilteredSelectComponent} from "../FilteredSelectComponent";

export const OldPlayAdForm = ({ method, playAd }) => function PlayAdForm({ method, playAd }) {
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method={method}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="locationId">Vart ska du spela?</label>
                <SelectComponent
                    endpoint="http://localhost:8085/api/location/select/list"
                    id="locationId"
                    label="locationId"
                    name="locationId"
                    required
                    onChange={(newValue) => data.setValue('locationId', newValue)}
                />
            </p>
            {data.locationId && (
            <p>
                <label htmlFor="golfClubId">Vart ska du spela?</label>
                <FilteredSelectComponent
                    endpoint="http://localhost:8085/api/golfclub/select/list"
                    label="golfClubId"
                    filterValue={data.locationId}
                    filterKey="locationId"
                    id="golfClubId"
                    name="golfClubId"
                    required
                    onChange={(newValue) => data.setValue('golfClubId', newValue)}
                />

            </p>
            )}
            {data.golfClubId && (
            <p>
                <label htmlFor="courseId">Vart ska du spela?</label>
                <FilteredSelectComponent
                    endpoint="http://localhost:8085/api/course/select/list"
                    label="courseId"
                    filterKey="golfClubId"
                    filterValue={data.golfClubId}
                    id="courseId"
                    name="courseId"
                    required
                    onChange={(newValue) => data.setValue('courseId', newValue)}
                />

            </p>
            )}
            <div >
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Save'}
                </button>
            </div>
        </Form>
    );
}

export default OldPlayAdForm;

export async function action({ request, params }) {
    const method = request.method;
    const data = await request.formData();

    const playAdData = {
        locationId: data.get('locationId'),
        golfClubId: data.get('golfClubId'),
        courseId: data.get('courseId'),
    };

    let url = 'http://localhost:8085/api/playad/';

    if (method === 'PUT') {
        const playAdId = params.playAdId;
        url = 'http://localhost:8085/api/playad/' + playAdId;
    }

    const token = getAuthToken();
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(playAdData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save booking.' }, { status: 500 });
    }

    return redirect('/profile/my-bookings');
}
